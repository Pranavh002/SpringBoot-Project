package com.example.spring_boot_project.service;

import com.example.spring_boot_project.model.Player;
import com.example.spring_boot_project.repo.PlayerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {
    @Autowired
    private PlayerRepo playerRepo;

    public List<Player> getAllPlayer(){
        return playerRepo.findAll();
    }
}
