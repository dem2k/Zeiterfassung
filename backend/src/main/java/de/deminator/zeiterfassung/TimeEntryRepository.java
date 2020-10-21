package de.deminator.zeiterfassung;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimeEntryRepository extends MongoRepository<TimeEntry, String> {
    List<TimeEntry> findByUser(String user);
}

