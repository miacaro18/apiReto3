package co.usa.reto3.reto3.repository.crud;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import co.usa.reto3.reto3.model.Reservation;

public interface ReservationCrudRepositorio extends CrudRepository<Reservation,Integer>{
    
    //JPQL
    @Query("select e.client, COUNT(e.client) from Reservation as e group by e.client order by COUNT(e.client) desc")
    public List<Object[]> countTotalReservationByClient();

    //Query Mathods 
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date startDate, Date devolutionDate);
    
    public List<Reservation> findAllByStatus(String status);
}
