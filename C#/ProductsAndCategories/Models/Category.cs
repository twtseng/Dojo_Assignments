using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public List<Association> Associations { get; set; }
        public List<int> ProductIds {
            get {
                if (this.Associations == null) {
                    return new List<int>();
                } 
                else 
                {
                    return this.Associations.Select(x => x.ProductId).ToList();
                }
            }
        }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        
    }
}
