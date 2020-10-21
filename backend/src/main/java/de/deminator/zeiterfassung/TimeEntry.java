package de.deminator.zeiterfassung;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "erfassung")
public class TimeEntry {

    @Id
    private String id;
    private String user;
    private LocalDate date;
    private LocalTime start;
    private LocalTime stop;

    public String getId() {
        return id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeEntry timeEntry = (TimeEntry) o;
        return Objects.equals(id, timeEntry.id) &&
                Objects.equals(user, timeEntry.user) &&
                Objects.equals(date, timeEntry.date) &&
                Objects.equals(start, timeEntry.start) &&
                Objects.equals(stop, timeEntry.stop);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, date, start, stop);
    }

    @Override
    public String toString() {
        return "TimeEntry{" +
                "id='" + id + '\'' +
                ", user='" + user + '\'' +
                ", date=" + date +
                ", start=" + start +
                ", stop=" + stop +
                '}';
    }
    
}
