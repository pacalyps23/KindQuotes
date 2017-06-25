package io.zipcoder.kindquotes.repo;

import io.zipcoder.kindquotes.model.Quote;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by luisgarcia on 6/24/17.
 */
public interface QuoteRepo extends CrudRepository<Quote, Long>
{
}
