package co.usa.reto3.reto3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.reto3.reto3.model.Message;
import co.usa.reto3.reto3.repository.MessageRepositorio;

@Service
public class MessageServicio {
    @Autowired
    private MessageRepositorio messageRepositorio;

    public List<Message>getAll(){
        return messageRepositorio.getAll();
    }

    public Optional<Message>getMessage(int id){
        return messageRepositorio.getMessage(id);
    }

    public Message save(Message message){
        // Verificar si el departamento es nuevo y de ser asi se guarda
        if (message.getIdMessage()==null) {
            return messageRepositorio.save(message);
        } else {
            Optional<Message> consulta=messageRepositorio.getMessage(message.getIdMessage());
            if (consulta.isEmpty()) {
                return messageRepositorio.save(message);
            } else {
                return message;
            }
        }
    }

    public Message update(Message message){
        if (message.getIdMessage()!=null) {
            Optional<Message> consulta=messageRepositorio.getMessage(message.getIdMessage());
            if (!consulta.isEmpty()){
                if (message.getMessageText()!=null) {
                    consulta.get().setMessageText(message.getMessageText());
                }
                if (message.getClient()!=null) {
                    consulta.get().setClient(message.getClient());
                }
                return messageRepositorio.save(consulta.get());
            }
        }
        return message;
    }

    public boolean delateMessage (int id){
        Optional<Message> consulta=messageRepositorio.getMessage(id);
        if (!consulta.isEmpty()){
            messageRepositorio.delete(consulta.get());
            return true;
        }
        return false;
    }
}
