package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Category;
import co.usa.reto3.reto3.repository.CategoryRepositorio;

@Service
public class CategoryServicio {
    @Autowired
    private CategoryRepositorio categoryRepositorio;

    public List<Category>getAll(){
        return categoryRepositorio.getAll();
    }
    public Optional<Category>getCategory(int id){
        return categoryRepositorio.getCategory(id);
    }

    public Category save (Category cate){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if (cate.getId()==null) {
            return categoryRepositorio.save(cate);
        } else {//si el objeto vienen con un numId veroficamo si existe o no
            Optional<Category> consulta=categoryRepositorio.getCategory(cate.getId());
            if (consulta.isEmpty()) {
                return categoryRepositorio.save(cate);
            } else {
                return cate;
            }
        }
    }

    public Category update (Category cate){
        if(cate.getId()!=null){
            Optional<Category> consulta=categoryRepositorio.getCategory(cate.getId());
            if (!consulta.isEmpty()){
                if (cate.getName()!=null){
                    consulta.get().setName(cate.getName());
                }
                if (cate.getDescription()!=null) {
                    consulta.get().setDescription(cate.getDescription());
                }
                return categoryRepositorio.save(consulta.get());
            }
        }
        return cate;
    }

    public boolean deleteCategory(int id){
        Optional<Category> consulta=categoryRepositorio.getCategory(id);
        if (!consulta.isEmpty()){
            categoryRepositorio.delete(consulta.get());
            return true;
        }
        return false;
    }
}
