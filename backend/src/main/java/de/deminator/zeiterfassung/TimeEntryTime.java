package de.deminator.zeiterfassung;

import java.time.LocalTime;
import java.util.Objects;

public class TimeEntryTime {

    private LocalTime start;
    private LocalTime stop;


    public LocalTime getStart() {
        return start;
    }

    public void setStart(LocalTime start) {
        this.start = start;
    }

    public LocalTime getStop() {
        return stop;
    }

    public void setStop(LocalTime stop) {
        this.stop = stop;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeEntryTime that = (TimeEntryTime) o;
        return Objects.equals(start, that.start) &&
                Objects.equals(stop, that.stop);
    }

    @Override
    public int hashCode() {
        return Objects.hash(start, stop);
    }

    @Override
    public String toString() {
        return "TimeEntryTime{" +
                "start=" + start +
                ", stop=" + stop +
                '}';
    }

}
