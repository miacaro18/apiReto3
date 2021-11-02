package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Admin;
import co.usa.reto3.reto3.repository.crud.AdminCrudRepositorio;

@Repository
public class AdminRepositorio {
    @Autowired
    private AdminCrudRepositorio adminCrudRepositorio;

    public List<Admin>getAll(){
        return(List<Admin>)adminCrudRepositorio.findAll();
    }

    public Optional<Admin>getAdmin(int id){
        return adminCrudRepositorio.findById(id);
    }

    public Admin save(Admin admin){
        return adminCrudRepositorio.save(admin);
    }

    public void delete(Admin admin){
        adminCrudRepositorio.delete(admin);
    }
}
