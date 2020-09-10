package de.deminator.zeiterfassung;

import java.time.LocalTime;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

//@SpringBootTest
class ZeiterfassungApplicationTests {

	@Test
	void timeZone() {
		System.out.println(LocalTime.of(12, 0));
	}
}
