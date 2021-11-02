package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Score;
import co.usa.reto3.reto3.repository.ScoreRepositorio;

@Service
public class ScoreServicio {
    @Autowired
    private ScoreRepositorio scoreRepositorio;

    public List<Score>getAll(){
        return scoreRepositorio.getAll();
    }

    public Optional<Score>getScore(int id){
        return scoreRepositorio.getScore(id);
    }

    public Score save(Score score){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if(score.getId()==null){
            return scoreRepositorio.save(score);
        }else{ //si el objeto vienen con un numId veroficamo si existe o no
            Optional<Score> consulta=scoreRepositorio.getScore(score.getId());
            if (consulta.isEmpty()) {
                return scoreRepositorio.save(score);
            } else {
                return score;
            }
        }
    }

    public Score update (Score score){
        if (score.getId()!=null) {
            Optional<Score> consulta=scoreRepositorio.getScore(score.getId());
            if (!consulta.isEmpty()) {
                if (score.getValor()!=null) {
                    consulta.get().setValor(score.getValor());
                }
                if (score.getMensaje()!=null) {
                    consulta.get().setMensaje(score.getMensaje());
                }
                return scoreRepositorio.save(consulta.get());
            }
        }
        return score;
    }

    public boolean deleteScore (int id){
        Optional<Score> consulta=scoreRepositorio.getScore(id);
        if (!consulta.isEmpty()) {
            scoreRepositorio.delete(consulta.get());
            return true;
        }
        return false;
    }
}
