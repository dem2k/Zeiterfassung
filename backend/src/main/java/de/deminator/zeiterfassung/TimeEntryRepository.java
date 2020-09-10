package de.deminator.zeiterfassung;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimeEntryRepository extends MongoRepository<TimeEntryDay, String> {
    
}
