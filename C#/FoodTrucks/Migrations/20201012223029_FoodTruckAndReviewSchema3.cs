using Microsoft.EntityFrameworkCore.Migrations;

namespace FoodTrucks.Migrations
{
    public partial class FoodTruckAndReviewSchema3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "FoodTrucks",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "FoodTrucks");
        }
    }
}
