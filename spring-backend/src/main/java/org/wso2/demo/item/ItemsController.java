package org.wso2.demo.item;

import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/items")
public class ItemsController {

    Map<String, Item> itemRepository = new ConcurrentHashMap<>(
        Map.of(
            "Dates", new Item("Dates", 3.99),
            "Milk", new Item("Milk", 5.49),
            "Bread", new Item("Bread", 2.02),
            "Eggs", new Item("Eggs", 0.52),
            "Butter", new Item("Butter", 4.51)
        )
    );

    @GetMapping()
    public Item getItem(@RequestParam String name) {
        return itemRepository.get(name);
    }

    @GetMapping("/all")
    public Map<String, Item> getAllItems() {
        return itemRepository;
    }
}
