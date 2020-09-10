package de.deminator.zeiterfassung;

import java.time.LocalTime;

import org.springframework.data.annotation.Id;

public class TimeEntryTime {

    private String id;
    private LocalTime start;
    private LocalTime stop;

    public TimeEntryTime(String id) {
        this.id = id;
    }

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

}
