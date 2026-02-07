<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    public function definition(): array
    {
        $roles = ['Admin', 'Editor', 'Viewer', 'Manager', 'User'];

        return [
            'name' => $this->faker->randomElement($roles),
        ];
    }
}
