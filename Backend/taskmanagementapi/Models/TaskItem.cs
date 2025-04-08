using System.ComponentModel.DataAnnotations;

namespace taskmanagementapi.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public bool Completed { get; set; }
    }
}
