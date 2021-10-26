package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.repository.ReservationRepositorio;

@Service
public class ReservationServicio {
    @Autowired
    private ReservationRepositorio reservationRepositorio;

    public List<Reservation>getAll(){
        return reservationRepositorio.getAll();
    }

    public Optional<Reservation>getReservation(int id){
        return reservationRepositorio.getReservation(id);
    }
    public Reservation save(Reservation reservation){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if (reservation.getIdReservation()==null) {
            return reservationRepositorio.save(reservation);
        } else {
            Optional<Reservation> consulta=reservationRepositorio.getReservation(reservation.getIdReservation());
            if (consulta.isEmpty()) {
                return reservationRepositorio.save(reservation);
            } else {
                return reservation;
            }
        }
    }
}
