/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.reto3.reto3.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Reservation;
import co.usa.reto3.reto3.model.reporte.ContEstadosReservas;
import co.usa.reto3.reto3.model.reporte.ContReservas;
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

    /**
     * Top client
     */
    public List<ContReservas> getTopClient(){
        return reservationRepositorio.getTopClient();
    }
    
    /**
     * ReportesEstados
     */
    public ContEstadosReservas getReporteEstados(){
        List<Reservation> completed=reservationRepositorio.getReservationPorEstado("completed");
        List<Reservation> cancelled= reservationRepositorio.getReservationPorEstado("cancelled");

        ContEstadosReservas reporteEstado= new ContEstadosReservas(completed.size(), cancelled.size());

        return reporteEstado;
    }

    /**
     * Reservation fechas
     */
    public List<Reservation> getReservationFechas(String fecha1, String fecha2){
        SimpleDateFormat formato=new SimpleDateFormat("yyyy-MM-dd");

        Date fechaIni=new Date();
        Date fechaFin=new Date();

        try {
            fechaIni=formato.parse(fecha1);
            fechaFin=formato.parse(fecha2);

        } catch (ParseException e) {
            e.printStackTrace();
        }

        if (fechaIni.before(fechaFin)) {
            return reservationRepositorio.getReservationFechas(fechaIni, fechaFin);
        } else {
            return new ArrayList<>(); 
        }
    }
}
