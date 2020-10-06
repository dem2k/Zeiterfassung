package de.deminator.zeiterfassung;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimeEntryRepository extends MongoRepository<TimeEntryDay, String> {
    List<TimeEntryDay> findByUser(String user);
}

