package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Computer;
import co.usa.reto3.reto3.repository.ComputerRepositorio;

@Service
public class ComputerServicio {
    @Autowired
    private ComputerRepositorio computerRepositorio;

    public List<Computer>getAll(){
        return computerRepositorio.getAll();
    }

    public Optional<Computer>getComputer(int id){
        return computerRepositorio.getComputer(id);
    }
    public Computer save(Computer computer){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if (computer.getId()==null) {
            return computerRepositorio.save(computer);
        } else {
            Optional<Computer>consulta=computerRepositorio.getComputer(computer.getId());
            if (consulta.isEmpty()) {
                return computerRepositorio.save(computer);
            } else {
                return computer;
            }
        }
    }
}
