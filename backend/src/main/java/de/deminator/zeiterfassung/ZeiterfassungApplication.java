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

        TimeEntry entryDay = new TimeEntry();
        entryDay.setUser("xtest");
        entryDay.setDate(LocalDate.now());
        entryDay.setStart(LocalTime.of(9, 0));
        entryDay.setStop(LocalTime.of(12, 0));

        repository.save(entryDay);
        List<TimeEntry> all = repository.findAll();
        System.out.println(all.get(0));
    }
    
}
