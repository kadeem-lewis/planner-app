import React from "react";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "~/components/ui/calendar";
import {
  DatePicker,
  DatePickerButton,
  DatePickerContent,
} from "~/components/ui/date-picker";
import type { DatePickerProps, DateValue } from "react-aria-components";
import { Button } from "~/components/ui/button";
import { getLocalTimeZone, today } from "@internationalized/date";

interface MyDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
  date: DateValue | undefined;
  setDate: React.Dispatch<React.SetStateAction<DateValue | undefined>>;
}

export default function MyDatePicker<T extends DateValue>({
  date,
  setDate,
  ...props
}: MyDatePickerProps<T>) {
  return (
    <DatePicker shouldCloseOnSelect={false} onChange={setDate} {...props}>
      <DatePickerButton date={date} />
      <DatePickerContent>
        <div className="flex flex-col items-start">
          <Button
            variant="ghost"
            onPress={() => setDate(today(getLocalTimeZone()))}
          >
            Today
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              setDate(
                today(getLocalTimeZone()).add({
                  days: 1,
                }),
              )
            }
          >
            Tomorrow
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              setDate(
                today(getLocalTimeZone()).add({
                  weeks: 1,
                }),
              )
            }
          >
            Next Week
          </Button>
          <Button
            variant="ghost"
            onPress={() =>
              setDate(
                today(getLocalTimeZone()).add({
                  months: 1,
                }),
              )
            }
          >
            Next Month
          </Button>
          <Button
            variant="ghost"
            className=""
            onPress={() => setDate(undefined)}
          >
            Reset
          </Button>
        </div>
        <Calendar>
          <CalendarHeading />
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => (
                <>
                  <CalendarCell date={date} />
                </>
              )}
            </CalendarGridBody>
          </CalendarGrid>
        </Calendar>
      </DatePickerContent>
    </DatePicker>
  );
}
