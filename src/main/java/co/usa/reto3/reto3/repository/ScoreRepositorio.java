package co.usa.reto3.reto3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.reto3.reto3.model.Score;
import co.usa.reto3.reto3.repository.crud.ScoreCrudRepositorio;

@Repository
public class ScoreRepositorio {
    @Autowired
    private ScoreCrudRepositorio scoreCrudRepositorio;

    public List<Score>getAll(){
        return(List<Score>)scoreCrudRepositorio.findAll();
    }

    public Optional<Score>getScore(int id){
        return scoreCrudRepositorio.findById(id);
    }
    
    public Score save (Score score){
        return scoreCrudRepositorio.save(score);
    }

    public void delete(Score score){
        scoreCrudRepositorio.delete(score);
    }
}
