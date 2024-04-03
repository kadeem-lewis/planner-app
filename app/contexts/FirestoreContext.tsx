import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { db } from "~/config/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useAuth } from "@clerk/remix";
interface Props {
  children: ReactNode;
}

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  progress: string;
  completed: boolean;
  deleted: boolean;
  userId: string;
}

interface Event {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface FirestoreContextType {
  tasks?: Task[];
  events?: Event[];
  addTask?: (
    title: string,
    description: string,
    dueDate: string,
    progress: string,
  ) => Promise<void>;
  deleteTask?: (id: string) => Promise<void>;
  updateTask?: (id: string, data: Partial<Task>) => Promise<void>;
  addEvent?: (
    title: string,
    startDate: string,
    endDate: string,
  ) => Promise<void>;
  updateEvent?: (id: string, data: Partial<Event>) => Promise<void>;
  deleteEvent?: (id: string) => Promise<void>;
}

const FirestoreContext = createContext<FirestoreContextType>({});

export const useFireStore = () => {
  return useContext(FirestoreContext);
};

export const FirestoreProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  const addTask = async (
    title: string,
    description: string,
    dueDate: string,
    progress: string,
  ) => {
    if (userId) {
      await addDoc(collection(db, "tasks"), {
        title,
        description,
        dueDate,
        progress,
        completed: false,
        deleted: false,
        userId,
      });
    }
  };
  const addEvent = async (
    title: string,
    startDate: string,
    endDate: string,
  ) => {
    if (userId) {
      await addDoc(collection(db, "events"), {
        title,
        startDate,
        endDate,
        userId,
      });
    }
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };
  const deleteEvent = async (id: string) => {
    await deleteDoc(doc(db, "events", id));
  };

  const updateTask = async (id: string, data: Partial<Task>) => {
    await updateDoc(doc(db, "tasks", id), data);
  };
  const updateEvent = async (id: string, data: Partial<Event>) => {
    await updateDoc(doc(db, "events", id), data);
  };

  useEffect(() => {
    const unsubscribeTasks = userId
      ? onSnapshot(
          query(collection(db, "tasks"), where("userId", "==", userId)),
          (snapshot) => {
            const tasksData: Task[] = [];
            snapshot.forEach((doc) => {
              tasksData.push({ id: doc.id, ...doc.data() } as Task);
            });
            setTasks(tasksData);
            setLoading(false);
          },
        )
      : () => {};

    const unsubscribeEvents = userId
      ? onSnapshot(
          query(collection(db, "events"), where("userId", "==", userId)),
          (snapshot) => {
            const eventsData: Event[] = [];
            snapshot.forEach((doc) => {
              eventsData.push({ id: doc.id, ...doc.data() } as Event);
            });
            setEvents(eventsData);
            setLoading(false);
          },
        )
      : () => {};

    return () => {
      unsubscribeTasks();
      unsubscribeEvents();
    };
  }, [userId]);

  const value: FirestoreContextType = {
    tasks,
    events,
    addTask,
    deleteTask,
    updateTask,
    addEvent,
    deleteEvent,
    updateEvent,
  };

  return (
    <FirestoreContext.Provider value={value}>
      {!loading && children}
    </FirestoreContext.Provider>
  );
};
