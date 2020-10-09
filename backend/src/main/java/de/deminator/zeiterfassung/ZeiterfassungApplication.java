package de.deminator.zeiterfassung;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ZeiterfassungApplication implements CommandLineRunner {

    @Autowired
    private TimeEntryRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(ZeiterfassungApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        repository.deleteAll();

        TimeEntryTime entryTime1 = new TimeEntryTime();
        entryTime1.setStart(LocalTime.of(9, 0));
        entryTime1.setStop(LocalTime.of(12, 0));

        TimeEntryTime entryTime2 = new TimeEntryTime();
        entryTime2.setStart(LocalTime.of(13, 0));
        entryTime2.setStop(LocalTime.of(18, 0));

        TimeEntryDay entryDay = new TimeEntryDay();
        entryDay.setUser("alex");
        entryDay.setDate(LocalDate.now());
        entryDay.getTimes().add(entryTime1);
        entryDay.getTimes().add(entryTime2);

        repository.save(entryDay);
        List<TimeEntryDay> all = repository.findAll();
        System.out.println(all.get(0));
    }
}
