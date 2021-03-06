# Generated by Django 3.1.12 on 2021-07-12 17:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('product', '0001_initial'),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_num', models.PositiveIntegerField()),
                ('phone_number', models.PositiveIntegerField()),
                ('adresse', models.CharField(max_length=200)),
                ('status', models.CharField(choices=[('done', 'Done'), ('canceled', 'Canceled'), ('waiting', 'Waiting')], default='waiting', max_length=15)),
                ('date', models.DateField(auto_now=True, verbose_name='Date')),
                ('consumer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='r_costumer_fk', to='account.costumer')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product', to='product.product')),
                ('vendor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='r_vendor_fk', to='account.vendor')),
            ],
            options={
                'ordering': ['-date'],
            },
        ),
    ]
