using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using AP.Domain.Models;

namespace AP.Persistence.Configurations
{
    public class ItemConfig : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.Property(i => i.Id).IsRequired().ValueGeneratedOnAdd();
            builder.Property(i => i.Name).IsRequired();
            builder.Property(i => i.FindingDate).IsRequired();
            builder.Property(i => i.FindingPlace).IsRequired();
            builder.Property(i => i.OriginDate).IsRequired();
            builder.Property(i => i.Description).IsRequired();
            builder.Property(i => i.CatalogId).IsRequired();

            builder.HasKey(i => i.Id);

            builder.HasOne(i => i.Catalog)
                   .WithMany(c => c.Items)
                   .OnDelete(DeleteBehavior.Cascade)
                   .HasForeignKey(i => i.CatalogId);

            
        }
    }
}