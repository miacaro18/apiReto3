package co.usa.reto3.reto3.repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.model.reporte.ContReservas;
import co.usa.reto3.reto3.repository.crud.ReservationCrudRepositorio;

@Repository
public class ReservationRepositorio {
    @Autowired
    private ReservationCrudRepositorio reservationCrudRepositorio;

    public List<Reservation>getAll(){
        return (List<Reservation>)reservationCrudRepositorio.findAll();
    }

    public Optional<Reservation>getReservation(int id){
        return reservationCrudRepositorio.findById(id);
    }

    public Reservation save(Reservation reservation){
        return reservationCrudRepositorio.save(reservation);
    }
    
    public void delete(Reservation reser){
        reservationCrudRepositorio.delete(reser);
    }

    public List<Reservation> getReservationPorEstado(String status){
        return reservationCrudRepositorio.findAllByStatus(status);
    }

    public List<Reservation> getReservationFechas(Date startDate, Date devolutionDate){
        return reservationCrudRepositorio.findAllByStartDateAfterAndStartDateBefore(startDate, devolutionDate);
    }

    public List<ContReservas> getTopClient(){
        List<ContReservas> res= new ArrayList<>(); 

        List<Object[]> reporte=reservationCrudRepositorio.countTotalReservationByClient();

        for (int i = 0; i < reporte.size(); i++) {
            res.add(new ContReservas((Long) reporte.get(i)[1], (Client)reporte.get(i)[0]));
        }
        return res;
    }
}
