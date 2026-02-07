<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1️⃣ Create roles first
        Role::insert([
            ['id' => 1, 'name' => 'Admin'],
            ['id' => 2, 'name' => 'Editor'],
            ['id' => 3, 'name' => 'Viewer'],
        ]);

        // 2️⃣ Create random users (role_id 1–3 will work now)
        User::factory(10)->create();

        // 3️⃣ Create fixed users
        User::factory()->create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'email' => 'admin@admin.com',
            'role_id' => 1,
        ]);

        User::factory()->create([
            'first_name' => 'Editor',
            'last_name' => 'User',
            'email' => 'editor@admin.com',
            'role_id' => 2,
        ]);

        User::factory()->create([
            'first_name' => 'Viewer',
            'last_name' => 'User',
            'email' => 'viewer@admin.com',
            'role_id' => 3,
        ]);
    }
}
