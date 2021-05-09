<?php

namespace Tests\Feature;

use App\Models\Activity;
use Database\Seeders\ActivitySeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

class ActivityTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $seeder = new ActivitySeeder();
        $seeder->run();
    }

    /**
     * Test endpoint availability.
     *
     * @return void
     */
    public function testActivityEndpointCanHandleGetMethod()
    {
        $response = $this->get('/api/activity');

        $response->assertStatus(Response::HTTP_OK);
    }

    /**
     * Test endpoint availability.
     *
     * @return void
     */
    public function testActivityEndpointOtherMethodNotWorking()
    {
        $response = $this->delete('/api/activity');

        $response->assertStatus(Response::HTTP_METHOD_NOT_ALLOWED);
    }
}
