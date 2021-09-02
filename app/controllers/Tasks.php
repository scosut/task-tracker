<?php
	class Tasks extends Controller {
		private $taskModel;
		
		public function __construct() {
			$this->taskModel = $this->model("Task");
		}
		
		public function index() {
      $tasks = $this->taskModel->fetchTasks();
			$err   = $tasks == false ? "error retrieving tasks" : "";
			
			if (empty($err)) {
        foreach($tasks as $task) {
          $task->reminder = boolval($task->reminder);
        }

				echo json_encode(["succeeded" => true, "data" => $tasks]);
			}
			else {
				echo json_encode(["succeeded" => false, "error" => $err]);
			}
		}	
    
    public function delete() {
      $data = json_decode(file_get_contents('php://input'), true);
			$data = filter_var_array($data, FILTER_SANITIZE_STRING);
      $err = $this->taskModel->deleteTask($data);
			$err = $err == false ? "error deleting task" : "";
			
			if (empty($err)) {
				echo json_encode(["succeeded" => true]);
			}
			else {
				echo json_encode(["succeeded" => false, "error" => $err]);
			}
		}	

    public function add() {
      $data = json_decode(file_get_contents('php://input'), true);
			$data = filter_var_array($data, FILTER_SANITIZE_STRING);
      $err  = new stdClass();

      if (empty($data['text'])) {
        $err->text = 'Please provide the text.';
      }

      if (empty($data['day'])) {
        $err->day = 'Please provide the day.';
      }
			
			if (count(get_object_vars($err)) === 0) {
        $err = $this->taskModel->addTask($data);
	  		$err = $err == false ? "error adding task" : "";

        if (empty($err)) {
				  echo json_encode(["succeeded" => true]);
			  }
      }

      if (!empty($err)) {
        echo json_encode(["succeeded" => false, "error" => $err]);
      }			
		}	

    public function update() {
      $data = json_decode(file_get_contents('php://input'), true);
			$data = filter_var_array($data, FILTER_SANITIZE_STRING);
      $err  = new stdClass();

      if (empty($data['text'])) {
        $err->text = 'Please provide the text.';
      }

      if (empty($data['day'])) {
        $err->day = 'Please provide the day.';
      }
			
			if (count(get_object_vars($err)) === 0) {
        $err = $this->taskModel->updateTask($data);
			  $err = $err == false ? "error updating task" : "";

        if (empty($err)) {
				  echo json_encode(["succeeded" => true]);
			  }
      }

      if (!empty($err)) {
        echo json_encode(["succeeded" => false, "error" => $err]);
      }
		}	

    public function toggle() {
      $data = json_decode(file_get_contents('php://input'), true);
			$data = filter_var_array($data, FILTER_SANITIZE_STRING);
      $err = $this->taskModel->toggleReminder($data);
			$err = $err == false ? "error toggling reminder" : "";
			
			if (empty($err)) {
				echo json_encode(["succeeded" => true]);
			}
			else {
				echo json_encode(["succeeded" => false, "error" => $err]);
			}
		}	
	}
?>