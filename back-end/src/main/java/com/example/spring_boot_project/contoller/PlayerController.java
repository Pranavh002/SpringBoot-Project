package com.example.spring_boot_project.contoller;

import com.example.spring_boot_project.model.Player;
import com.example.spring_boot_project.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class PlayerController {
    @Autowired
    private PlayerService playerService;
    @GetMapping("/players")
    public List<Player> getAllPlayer(){
        return playerService.getAllPlayer();
    }
}
