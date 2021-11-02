/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.repository.ReservationRepositorio;

/**
 *
 * @author Miguel_Castro
 */
@Service
public class ReservationServicio {

    /**
     * Autowired Reservation Repositorio
     */
    @Autowired
    private ReservationRepositorio reservationRepositorio;

    /**
     * Reservation Get all
     */
    public List<Reservation>getAll(){
        return reservationRepositorio.getAll();
    }

    /**
     * Reservation Optional Id
     */
    public Optional<Reservation>getReservation(int id){
        return reservationRepositorio.getReservation(id);
    }

    /**
     * Reservation Save
     */
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

    /**
     * Reservation Updata
     */
    public Reservation update (Reservation reser){
        if (reser.getIdReservation()!=null) {
            Optional<Reservation> consulta=reservationRepositorio.getReservation(reser.getIdReservation());
            if (!consulta.isEmpty()){
                if (reser.getStartDate()!=null){
                    consulta.get().setStartDate(reser.getStartDate());
                }
                if (reser.getDevolutionDate()!=null){
                    consulta.get().setDevolutionDate(reser.getDevolutionDate());
                }
                if (reser.getStatus()!=null) {
                    consulta.get().setStatus(reser.getStatus());
                }
                if (reser.getScore()!=null){
                    consulta.get().setScore(reser.getScore());
                }
                return reservationRepositorio.save(consulta.get());
            }
        }
        return reser;
    }

    /**
     * Reservation Delete
     */
    public boolean deleteReservation (int id){
        Optional<Reservation> consulta=reservationRepositorio.getReservation(id);
        if (!consulta.isEmpty()) {
            reservationRepositorio.delete(consulta.get());
            return true;
        }
        return false;
    }
}
