package co.usa.reto3.reto3.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "reservation")
public class Reservation implements Serializable {
    //Campo de llave primaria  y Autoincremental
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Integer idReservation;
    private Date startDate;
    private Date devolutionDate;

    //Realizamos la relacion (muchos a uno) con computer
    @ManyToOne
    @JoinColumn(name = ("computer_id"))
    @JsonIgnoreProperties ({"reservations","computer","client"})
    private Computer computer;

    //Realizamos la relacion (muchos a uno) con client
    @ManyToOne
    @JoinColumn(name = ("client_id"))
    @JsonIgnoreProperties ({"reservations","client","messages"})
    private Client client;

    //Realizamos la relacion (muchos a uno) con score
    @ManyToOne
    @JoinColumn(name = ("score_id"))
    @JsonIgnoreProperties ({"reservations","score"})
    private Score score;

    public Integer getIdReservation() {
        return idReservation;
    }

    public void setIdReservation(Integer idReservation) {
        this.idReservation = idReservation;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getDevolutionDate() {
        return devolutionDate;
    }

    public void setDevolutionDate(Date devolutionDate) {
        this.devolutionDate = devolutionDate;
    }

    public Computer getComputer() {
        return computer;
    }

    public void setComputer(Computer computer) {
        this.computer = computer;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Score getScore() {
        return score;
    }

    public void setScore(Score score) {
        this.score = score;
    }
    
}
