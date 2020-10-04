using System;
using System.ComponentModel.DataAnnotations;

namespace DojoSurveyWithModel.Models
{
    public class Survey
    {
        [Required]
        [MinLength(3)]
        public string Name { get; set; }
        public string  DojoLocation { get; set; }
        public string FavoriteLanguage { get; set; }
        [MinLength(20)]
        public string Comment { get; set; }
    }
}
