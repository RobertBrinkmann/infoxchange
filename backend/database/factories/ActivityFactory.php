<?php

namespace Database\Factories;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Factories\Factory;

class ActivityFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Activity::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'search' => $this->faker->lexify('????'),
            'results' => $this->faker->numberBetween(0, 50),
            'message' => $this->faker->name()
        ];
    }

    
    /**
     * Define an successful activity.
     *
     * @return ActivityFactory
     */
    public function success(): ActivityFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'message' => $this->faker->name()
            ];
        });
    }

    
    /**
     * Define an failed activity.
     *
     * @return ActivityFactory
     */
    public function failed(): ActivityFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'results' => 0,
                'message' => 'Invalid API key!'
            ];
        });
    }
}
