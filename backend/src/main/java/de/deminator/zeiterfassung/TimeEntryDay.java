package de.deminator.zeiterfassung;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "erfassung")
public class TimeEntryDay {

    @Id
    private String id;
    private String user;
    private LocalDate date;
    private List<TimeEntryTime> times = new ArrayList<>();

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

    public List<TimeEntryTime> getTimes() {
        return times;
    }

    public void setTimes(List<TimeEntryTime> times) {
        this.times = times;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        TimeEntryDay that = (TimeEntryDay) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(user, that.user) &&
                Objects.equals(date, that.date) &&
                Objects.equals(times, that.times);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, user, date, times);
    }

    @Override
    public String toString() {
        return "TimeEntryDay{" +
                "id='" + id + '\'' +
                ", user='" + user + '\'' +
                ", date=" + date +
                ", times=" + times +
                '}';
    }

}
