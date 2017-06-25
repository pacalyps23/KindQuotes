package io.zipcoder.kindquotes.controller;

import com.sun.org.apache.regexp.internal.RE;
import io.zipcoder.kindquotes.model.Quote;
import io.zipcoder.kindquotes.repo.QuoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RequestMapping("/quotes")
@RestController
@CrossOrigin("http://localhost:8100")
public class QuoteController {

    @Autowired
    QuoteRepo quoteRepo;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<ArrayList<Quote>> getAllQuotes(){
        Quote dummyQuote = new Quote("Yoo");
        ArrayList<Quote> quotes = new ArrayList<>();
        quotes.add(dummyQuote);
        quoteRepo.findAll().forEach(quotes::add);
        return new ResponseEntity<>(quotes, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Quote> getQuote(@PathVariable("id") Long id)
    {
        Quote quote = quoteRepo.findOne(id);
        return new ResponseEntity<>(quote, HttpStatus.OK);
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Quote> addQuote(@RequestBody Quote quote)
    {
        quoteRepo.save(quote);
        return new ResponseEntity<>(quote, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteQoute(@PathVariable("id") Long id)
    {
        quoteRepo.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
