using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class CategoryForm
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public List<int> ProductIds { get; set; }
        public override string ToString()
        {
            return $"CategoryId:{CategoryId} Name:{Name} ProductIds:{string.Join(',',ProductIds)}";
        }        
    }
}
