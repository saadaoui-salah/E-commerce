# Generated by Django 3.1.12 on 2021-07-12 17:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=60)),
                ('image', models.ImageField(blank=True, null=True, upload_to='categories')),
                ('parent_category', models.ForeignKey(blank=True, limit_choices_to={'parent_category__isnull': True}, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sub_cat', to='product.category')),
            ],
            options={
                'verbose_name': 'Category',
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('price_vender', models.DecimalField(decimal_places=2, max_digits=10)),
                ('price_achat', models.DecimalField(decimal_places=2, max_digits=10)),
                ('detail', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='products')),
                ('quantity', models.PositiveIntegerField()),
                ('date', models.DateField(auto_now_add=True, verbose_name='Date')),
                ('rating', models.IntegerField(default=0)),
                ('category', models.ForeignKey(blank=True, limit_choices_to={'parent_category__isnull': False}, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_category', to='product.category')),
                ('parent_category', models.ForeignKey(blank=True, limit_choices_to={'parent_category__isnull': True}, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_parent_category', to='product.category')),
                ('vendor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='account.vendor')),
            ],
            options={
                'ordering': ['date'],
            },
        ),
        migrations.CreateModel(
            name='ProductInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(blank=True, choices=[(0, 'Zero'), (1, 'One'), (2, 'Two'), (3, 'Three'), (4, 'Four'), (5, 'Five')], default=0, null=True)),
                ('comment', models.TextField(blank=True, null=True)),
                ('date', models.DateField(auto_now_add=True)),
                ('costumer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='account.costumer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
        migrations.CreateModel(
            name='Cobon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(auto_created=True, max_length=8, unique=True)),
                ('percentage', models.PositiveIntegerField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='product.product')),
            ],
        ),
    ]
