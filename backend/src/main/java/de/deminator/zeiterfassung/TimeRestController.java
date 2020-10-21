package de.deminator.zeiterfassung;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class TimeRestController {

    private final TimeEntryRepository repository;

    public TimeRestController(TimeEntryRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/times")
    public ResponseEntity<List<TimeEntry>> getTimes() {
        List<TimeEntry> all = repository.findAll();
        if (all.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(all, HttpStatus.OK);
        }
    }

    @GetMapping("/times/{id}")
    public ResponseEntity<TimeEntry> getTimesById(@PathVariable("id") String id) {
        Optional<TimeEntry> item = repository.findById(id);

        return item.map(timeEntry -> new ResponseEntity<>(timeEntry, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/times")
    public ResponseEntity<TimeEntry> createTimes(@RequestBody TimeEntry item) {
        TimeEntry newItem = repository.save(item);
        return new ResponseEntity<>(newItem, HttpStatus.CREATED);
    }

}
