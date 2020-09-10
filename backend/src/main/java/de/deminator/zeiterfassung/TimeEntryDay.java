package de.deminator.zeiterfassung;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "erfassung")
public class TimeEntryDay {
    @Id
    private String id;
    private String user;
    private LocalDate date;
    private List<TimeEntryTime> times = new ArrayList<>();

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

    public List<TimeEntryTime> getTimes() {
        return times;
    }

    public void setTimes(List<TimeEntryTime> times) {
        this.times = times;
    }
}
