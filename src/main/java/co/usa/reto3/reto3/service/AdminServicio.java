package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Admin;
import co.usa.reto3.reto3.repository.AdminRepositorio;

@Service
public class AdminServicio {
    @Autowired
    private AdminRepositorio adminRepositorio;

    public List<Admin>getAll(){
        return adminRepositorio.getAll();
    }

    public Optional<Admin>getAdmin(int id){
        return adminRepositorio.getAdmin(id);
    }

    public Admin save(Admin admin){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if (admin.getId()==null) {
            return adminRepositorio.save(admin);
        } else { //si el objeto vienen con un numId veroficamo si existe o no
            Optional<Admin> consulta=adminRepositorio.getAdmin(admin.getId());
            if (consulta.isEmpty()) {
                return adminRepositorio.save(admin);
            } else {
                return admin;
            }
        }
    }

    public Admin update (Admin admin){
        if (admin.getId()!=null) {
            Optional<Admin> consulta=adminRepositorio.getAdmin(admin.getId());
            if (!consulta.isEmpty()) {
                if (admin.getName()!=null) {
                    consulta.get().setName(admin.getName());
                }
                if (admin.getPassword()!=null) {
                    consulta.get().setPassword(admin.getPassword());
                }
                return adminRepositorio.save(consulta.get());
            }
        }
        return admin;
    }

    public boolean deleteAdmin(int id){
        Optional<Admin> consulta=adminRepositorio.getAdmin(id);
        if (!consulta.isEmpty()){
            adminRepositorio.delete(consulta.get());
            return true;
        }
        return false;
    }
}
