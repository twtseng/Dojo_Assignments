using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Association> Associations { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public List<int> CategoryIds {
            get {
                if (this.Associations == null) {
                    return new List<int>();
                } 
                else 
                {
                    return this.Associations.Select(x => x.CategoryId).ToList();
                }
            }
        }
    }
}
