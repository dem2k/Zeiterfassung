package de.deminator.zeiterfassung;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "times")
public interface TimeEntryRepository extends MongoRepository<TimeEntryDay, String> {
    List<TimeEntryDay> findByUser(String user);
}

