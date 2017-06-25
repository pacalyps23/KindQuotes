package io.zipcoder.kindquotes.model;


<<<<<<< HEAD
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Quote
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String message;

    public Quote(){}
    public Quote(String msg)
    {
        this.message = msg;
    }

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }

=======
public class Quote {

    private String message;

    public Quote(String msg){
        this.message = msg;
    }

>>>>>>> d85b822207fa5913e4a5987f0b11366847087422
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
