using System;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models
{
    public class ProductForm
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<int> CategoryIds { get; set; }
        public override string ToString()
        {
            return $"ProductId:{ProductId} Name:{Name} Description:{Description} CategoryIds:{string.Join(',',CategoryIds)}";
        }
    }
}
