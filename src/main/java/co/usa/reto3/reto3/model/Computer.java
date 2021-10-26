/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.reto3.reto3.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 *
 * @author Miguel_Castro
 */
@Entity
@Table(name= "computer")
public class Computer implements Serializable{

    /**
     * LLave primaria Id
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /**
     * Nombre
     */
    private String name;

    /**
     * Brand
     */
    private String brand;

    /**
     * Year
     */
    private Integer year;

    /**
     * Description
     */
    private String description;

    /**
     * Realizamos la relacion (muchos a uno) con Category
     */
    @ManyToOne
    @JoinColumn(name = ("category_id"))
    @JsonIgnoreProperties({"computers","category"})
    private Category category;
    
    /**
     * Realizamos la relacion (uno a muchos) con messages
     */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "computer")
    @JsonIgnoreProperties({"computer","messages","reservations","client"})
    private List<Message> messages;

    /**
     * Realizamos la relacion (uno a muchos) con Reservations
     */
    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "computer")
    @JsonIgnoreProperties({"computer","reservations"})
    private List<Reservation> reservations;

    /**
     * getId
     * @return 
     */
    public Integer getId() {
        return id;
    }

    /**
     * SetId
     * @param id
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * getName
     * @return 
     */
    public String getName() {
        return name;
    }

    /**
     * SetName
     * @param name 
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * getBrand
     * @return 
     */
    public String getBrand() {
        return brand;
    }

    /**
     * SetBrand
     * @param brand 
     */
    public void setBrand(String brand) {
        this.brand = brand;
    }

    /**
     * getYear
     * @return 
     */
    public Integer getYear() {
        return year;
    }

    /**
     * SetYear
     * @param year 
     */
    public void setYear(Integer year) {
        this.year = year;
    }

    /**
     * getDescription
     * @return 
     */
    public String getDescription() {
        return description;
    }

    /**
     * SetDescription
     * @param description 
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * getCategory
     * @return 
     */
    public Category getCategory() {
        return category;
    }

    /**
     * SetCategory
     * @param category 
     */
    public void setCategory(Category category) {
        this.category = category;
    }

    /**
     * getMessages
     * @return 
     */
    public List<Message> getMessages() {
        return messages;
    }

    /**
     * SetMessages
     * @param messages 
     */
    public void setMessages(List<Message> messages) {
        this.messages = messages;
    }

    /**
     * getReservations
     * @return 
     */
    public List<Reservation> getReservations() {
        return reservations;
    }

    /**
     * SetReservations
     * @param reservations 
     */
    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }
}
