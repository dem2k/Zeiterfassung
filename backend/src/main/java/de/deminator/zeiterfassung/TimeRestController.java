package de.deminator.zeiterfassung;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TimeRestController {

    private final TimeEntryRepository repository;

    public TimeRestController(TimeEntryRepository repository) {
        this.repository = repository;
    }

    @CrossOrigin
    @GetMapping("/api/times")
    public List<TimeEntryDay> getTimes() {
        return repository.findAll();
    }

}
