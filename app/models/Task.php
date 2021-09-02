<?php
	class Task {
		private $db;
		
		public function __construct() {
			$this->db = new Database();
		}
		
		# fetch all tasks
		public function fetchTasks() {
			$this->db->query("CALL spFetchTasks()");
			$results = $this->db->resultSet();

			return $results;
		}

    # add task
    public function addTask($data) {
			$this->db->query("CALL spAddTask(:_text, :_day, :_reminder)");
			
			$params = [
				":_text"     => $data['text'],
				":_day"      => $data['day'],
				":_reminder" => boolval($data['reminder'])
			];
			
			$this->db->bindArray($params);
			
			# execute
			return $this->db->execute();
		}

    # update task
    public function updateTask($data) {
			$this->db->query("CALL spUpdateTask(:_id, :_text, :_day, :_reminder)");
			
			$params = [
        ":_id"       => $data['id'],
				":_text"     => $data['text'],
				":_day"      => $data['day'],
				":_reminder" => boolval($data['reminder'])
			];
			
			$this->db->bindArray($params);
			
			# execute
			return $this->db->execute();
		}

    # toggle reminder
    public function toggleReminder($data) {
			$this->db->query("CALL spToggleReminder(:_id, :_reminder)");
			
			$params = [
				":_id"       => $data['id'],
				":_reminder" => !boolval($data['reminder'])
			];
			
			$this->db->bindArray($params);
			
			# execute
			return $this->db->execute();
		}

    # delete task
    public function deleteTask($data) {
			$this->db->query("CALL spDeleteTask(:_id)");
      $this->db->bind(":_id", $data['id']);
			
			# execute
			return $this->db->execute();
		}
	}
?>