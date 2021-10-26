package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Client;
import co.usa.reto3.reto3.repository.ClientRepositorio;

@Service
public class ClientServicio {
    @Autowired
    private ClientRepositorio clientRepositorio;

    public List<Client>getAll(){
        return clientRepositorio.getAll();
    }

    public Optional<Client>getClient(int id){
        return clientRepositorio.getClient(id);
    }

    public Client save(Client cliente){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if (cliente.getIdClient()==null) {
            return clientRepositorio.save(cliente);
        } else { //si el objeto vienen con un numId veroficamo si existe o no
            Optional<Client> consulta=clientRepositorio.getClient(cliente.getIdClient());
            if (consulta.isEmpty()) {
                return clientRepositorio.save(cliente);
            } else {
                return cliente;
            }
        }
    }
}
