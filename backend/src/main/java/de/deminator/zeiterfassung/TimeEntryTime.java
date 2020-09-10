package de.deminator.zeiterfassung;

import java.time.LocalTime;

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

}
